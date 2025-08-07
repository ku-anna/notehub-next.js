// app/notes/[id]/page.tsx

import { QueryClient } from "@tanstack/react-query";
import { getSingleNote } from "@/lib/api";
import NoteDetailsClient from "@/api/notes/[id]/NoteDetails.client";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
  });

  return <NoteDetailsClient />;
};

export default NoteDetails;
