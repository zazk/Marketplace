import React from 'react';
import Layout from '../components/layout';
class About extends React.Component {
  render() {
    return (
      <Layout title="About">
        <section className="about">
          <div className="content">
            <h1>About</h1>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit nostrum, nobis animi molestiae
                officiis id harum enim sequi distinctio neque rem itaque rerum dicta laboriosam quia nesciunt sunt odio.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
export default About;
