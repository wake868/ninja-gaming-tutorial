export async function get({ params }) {
  /* 
  connect and pull data from database could be done here
  for now we will just use some dummy data stored in a variable
  */

  const guides = [
    { id: 1, title: "Some title 1", body: "lorem ipsum" },
    { id: 2, title: "Some title 2", body: "lorem ipsum" },
    { id: 3, title: "Some title 3", body: "lorem ipsum" },
    { id: 4, title: "Some title 4", body: "lorem ipsum" },
    { id: 5, title: "Some title 5", body: "lorem ipsum" },
  ];

  const guide = guides.find((g) => g.id == params.id);

  if (guide) {
    return {
      status: 200,
      body: { guide },
    };
  }

  return {
    status: 404,
  };
}
