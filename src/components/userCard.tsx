import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  name: string | null;
  email: number | null;
  image: string | null;
  age: number | null;
}

const UserCard = ({ id, name, email, image, age }: Props) => {
  return (
    <div className="box-border h-auto w-58 p-4 border-4">
      <img
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        //   className={styles.cardImage}
      />
      <div>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>email: {email}</p>
        <p>age: {age ? age : 0}</p>
      </div>
    </div>
  );
};

export default UserCard;
