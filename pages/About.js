import React from 'react';
import Layout from '../components/layout';

function About({ user }) {
  return (
    <Layout title="About" user={user}>
      <section className="about">
        <div className="content">
          <h1>About</h1>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit nostrum, nobis animi molestiae officiis
              id harum enim sequi distinctio neque rem itaque rerum dicta laboriosam quia nesciunt sunt odio.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default About;
