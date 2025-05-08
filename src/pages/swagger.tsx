import React from 'react';

export default function SwaggerUIPage() {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="https://localhost:44319/swagger/index.html" // or https://localhost:44319/swagger
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Swagger UI"
      />
    </div>
  );
}
