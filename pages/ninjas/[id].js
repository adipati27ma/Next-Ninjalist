// func will tell Next.js how many html pages need to be made
// based on the data (ninjas)
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths, // variable ini yg akan dilihat oleh Next.js
    fallback: false, // jika id yg diakses tidak ada, maka akan 404
  };
};

// func akan di-run 10x (karena hasil HTML dari getStaticPaths ada 10), sesuai jumlah item di variabel "paths" (yg dibuat)
// variable "paths" akan masuk ke "context"
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>Email : {ninja.email}</p>
      <p>Website : {ninja.website}</p>
      <p>City : {ninja.address.city}</p>
    </div>
  );
};

export default Details;
