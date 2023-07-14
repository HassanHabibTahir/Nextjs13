import UserCard from "@/components/userCard";
import { prisma } from "@/lib/prisma";
import React from "react";

const users = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="flex">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
};

export default users;
