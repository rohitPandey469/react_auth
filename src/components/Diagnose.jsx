import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState('');
  const [isDiagnosing, setIsDiagnosing] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleDiagnose = async () => {
    if (!image) {
      return;
    }

    setIsDiagnosing(true);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('https://backend-restapi-973f.onrender.com/diagnose', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setDiagnosis(data.diagnosis);
      } else {
        setDiagnosis('Error diagnosing the image.');
      }
    } catch (error) {
      setDiagnosis('An error occurred while diagnosing the image.');
    } finally {
      setIsDiagnosing(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Disease Diagnosis</h2>
              <form id="imageUploadForm" action="/diagnose" method="POST" encType="multipart/form-data">
                <div className="input-group mb-3">
                  <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
                </div>
                <button className="btn btn-primary btn-block" onClick={handleDiagnose} disabled={isDiagnosing}>
                  Diagnose
                </button>
              </form>
              {isDiagnosing && <p className="text-center mt-3">Diagnosing...</p>}
              {diagnosis && (
                <div className="alert alert-info mt-3" role="alert">
                  <strong>Diagnosis:</strong> {diagnosis}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
