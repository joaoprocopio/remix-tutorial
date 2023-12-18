import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { deleteContact } from "~/data";

export const action = async ({ params }: ActionFunctionArgs) => {
  const contactId = params.contactId;

  if (!contactId) throw new Response(null, { status: 400 });

  await deleteContact(contactId);

  return redirect("/");
};
