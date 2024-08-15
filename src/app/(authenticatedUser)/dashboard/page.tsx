/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qCchyEoN91m
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AddPost from "../_components/add-post";
import Stories from "../_components/stories";
import Feed from "../_components/feed";
export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex flex-col gap-2">
      <Stories/>
      <AddPost/>
      <Feed/>
    </div>
  );
}


