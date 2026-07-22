import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

const sampleProducts: Product[] = [
  { id: 1, name: 'Sample T-Shirt', price: 19.99 },
  { id: 2, name: 'Running Shoes', price: 49.99 },
  { id: 3, name: 'Wireless Headphones', price: 79.99 },
];

const HomePage: React.FC = () => {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Hyper Mart</h1>
        <p style={{ color: '#555' }}>Everyday low prices. Fast delivery.</p>
      </header>

      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div style={{ flex: 1 }}>
          <h2>Welcome to Hyper Mart</h2>
          <p style={{ color: '#666' }}>
            Find popular products and great deals. Browse categories or search to
            get started.
          </p>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Shop Now</button>
        </div>
        <div style={{ width: 240, height: 160, background: '#f3f3f3' }}>
          {/* Placeholder for hero image */}
        </div>
      </section>

      <section>
        <h3>Popular products</h3>
        <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
          {sampleProducts.map((p) => (
            <div
              key={p.id}
              style={{
                border: '1px solid #e0e0e0',
                padding: 12,
                width: 180,
                borderRadius: 6,
              }}
            >
              <div style={{ height: 100, background: '#fafafa', marginBottom: 8 }} />
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ color: '#888' }}>${p.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
