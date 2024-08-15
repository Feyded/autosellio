import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import prisma from "@/lib/db";
// The Kinde issuer URL should already be in your `.env` file
// from when you initially set up Kinde. This will fetch your
// public JSON web keys file
const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
  try {
    // Get the token from the request
    const token = await req.text();

    // Decode the token
    const jwtDecoded = jwt.decode(token, { complete: true });

    if (!jwtDecoded) {
      return NextResponse.json({
        status: 500,
        statusText: "Error decoding jwt",
      });
    }

    const header = jwtDecoded.header;
    const kid = header.kid;

    //Verify the token
    const key = await client.getSigningKey(kid);

    const signingKey = key.getPublicKey();

    const event = jwt.verify(token, signingKey) as JwtPayload;

    //handle various events
    switch (event?.type) {
      case "user.created":
        // handle user created event
        await prisma.user.create({
          data: {
            id: event.data.user.id,
            email: event.data.user.email,
            firstName: event.data.user.first_name,
            lastName: event.data.user.last_name,
          },
        });
        break;
      default:
        // other events that we don't handle
        console.log("event not handles");
        break;
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
  }
  return NextResponse.json({ status: 200, statusText: "success" });
}
