import { NextResponse } from "next/server";

const posts = [
  {
    title: "His mother had always taught him",
    slug: "his-mother",
    content:
      "hI! His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
  },
  {
    title: "Dolor Sit Amet",
    slug: "dolor-sit-amet",
    content:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Consectetur Adipiscing",
    slug: "consectetur-adipiscing",
    content:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    title: "Integer Nec Odio",
    slug: "integer-nec-odio",
    content:
      "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
  },
  {
    title: "Praesent Libero",
    slug: "praesent-libero",
    content:
      "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
