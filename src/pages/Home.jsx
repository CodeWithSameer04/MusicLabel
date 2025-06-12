import React from 'react';

function Home() {
  return (
    <div id="explore">
      <h1>Home Page</h1>
      <p>
        Welcome to the MusicLabel website! Here you can explore our artists, albums, and services.
        Scroll down to see how the footer behaves with lots of content.
      </p>
      <section>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              margin: '24px 0',
              padding: '16px',
              background: i % 2 === 0 ? '#f5f5f5' : '#e0e0e0',
            }}
          >
            <h2>Section {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi,
              euismod euismod nisi nisi euismod nisi.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;