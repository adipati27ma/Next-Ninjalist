// automatically create route : "/about" & can access it
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
        <meta
          name="description"
          content="Ninja List doesn't have a team, only one person who developed this website. -Adipateez"
        />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          consectetur voluptatibus? Cum veritatis veniam officiis tempore,
          recusandae labore corporis possimus optio maiores culpa quisquam quia
          ex nemo adipisci quas deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          consectetur voluptatibus? Cum veritatis veniam officiis tempore,
          recusandae labore corporis possimus optio maiores culpa quisquam quia
          ex nemo adipisci quas deleniti?
        </p>
      </div>
    </>
  );
};

export default About;
