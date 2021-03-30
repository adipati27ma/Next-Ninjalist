import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

// automatically create route : "/" & can access it

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        exercitationem saepe dolor, vitae praesentium, molestias soluta optio,
        facilis corrupti minus ex labore quisquam. Exercitationem reprehenderit
        ipsum doloribus molestias fugit! Similique?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        exercitationem saepe dolor, vitae praesentium, molestias soluta optio,
        facilis corrupti minus ex labore quisquam. Exercitationem reprehenderit
        ipsum doloribus molestias fugit! Similique?
      </p>
      <Footer />
    </div>
  );
}
