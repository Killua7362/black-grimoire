import GardenLayout from "../../components/layouts/home-garden";
import Layout from "../../components/layouts/main-layout";

import { getAllNotes, getNoteBySlug } from "../../lib/api";
export default function Tags({ allNotes }) {
  return (
    <Layout allNotes={allNotes}>
      <GardenLayout />
    </Layout>
  );
}

export async function getStaticProps() {
  const allNotes = await getAllNotes();
  return {
    props: { allNotes } || null,
  };
}
