import { auth } from "@clerk/nextjs/server";

export async function createTransaction(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // ArcJet to add rate limiting

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User Not found");
    }
  } catch (error) {}
}
