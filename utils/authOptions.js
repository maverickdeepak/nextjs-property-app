import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // this function will invoke on successfull sign in
    async singIn({ profile }) {
      // connect to DB
      await connectDB();
      // check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // if not then add user to DB
      if (!userExists) {
        // Truncate username if too long
        const username = profile.name.slice(0, 25);
        await User.create({
          email: profile.email,
          username: username,
          image: profile.picture,
        });
      }
      // return true to allow sign in
      return true;
    },
    // this function will modify the session
    async session({ session }) {
      // get user from DB
      const user = await User.findOne({ email: session.user.email });
      // assign the user id to the session
      session.user.id = user._id.toString();
      // return session
      return session;
    },
  },
};
