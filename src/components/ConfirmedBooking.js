import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // استيراد useLocation لقراءة البيانات الممررة

export default function ConfirmedBooking() {
    const navigate = useNavigate();
    const location = useLocation(); // تفعيل أداة استقبال البيانات

    // جلب البيانات المرسلة، ووضع قيم افتراضية احتياطية في حال الدخول المباشر للصفحة
    const details = location.state?.bookingDetails || { name: 'N/A', persons: 'N/A', date: 'N/A', time: 'N/A' };

    const handleClose = () => {
        navigate('/'); 
    };

    return (
        <div className="confirm" style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', margin: '20px', borderRadius: '8px' }}>
            <h1>Confirmation Message</h1>
            <p>Your table has been booked successfully. Appreciation!</p>
            
            {/* عرض الجدول المعتمد بناءً على البيانات المنقولة */}
            <div style={{ marginTop: "20px", display: "inline-block", background: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
              <h4 style={{ marginBottom: "10px", color: "#495E57" }}>Confirmed Details:</h4>
              <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", textAlign: "center" }}>
                <thead>
                  <tr style={{ background: "#EDEFEE" }}>
                    <th>Name</th><th>Persons</th><th>Date</th><th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{details.name}</td>
                    <td>{details.persons}</td>
                    <td>{details.date}</td>
                    <td>{details.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <button 
                onClick={handleClose}
                style={{ marginTop: '20px', padding: '10px 20px', background: '#495E57', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Close & Return Home
            </button>
        </div>
    );
}
