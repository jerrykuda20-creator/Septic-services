import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory record store for leads and emergency requests
const bookingRecords = [];

// Logger middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'ClearFlow Septic API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    activeCrewCount: 4
  });
});

// Quote and Booking submission endpoint
app.post('/api/quote', (req, res) => {
  try {
    const { fullName, phone, email, address, serviceType, tankSize, preferredDate, isEmergency, notes } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Full name and phone number are required.'
      });
    }

    const referenceId = `CF-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRecord = {
      referenceId,
      fullName,
      phone,
      email: email || null,
      address: address || null,
      serviceType: serviceType || 'pumping',
      tankSize: tankSize || '1000 Gallons',
      preferredDate: preferredDate || 'Earliest Available',
      isEmergency: Boolean(isEmergency),
      notes: notes || '',
      createdAt: new Date().toISOString(),
      status: isEmergency ? 'DISPATCH_URGENT' : 'PENDING_CONFIRMATION'
    };

    bookingRecords.push(newRecord);
    console.log(`[BOOKING CREATED] ID: ${referenceId} - Emergency: ${newRecord.isEmergency} - Name: ${fullName}`);

    return res.status(201).json({
      success: true,
      referenceId,
      message: isEmergency
        ? 'Emergency dispatch team alerted. An operator will contact you in under 5 minutes.'
        : 'Thank you! Your septic service request has been logged. We will call to confirm your appointment time.',
      record: newRecord
    });
  } catch (err) {
    console.error('Error handling /api/quote:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error processing booking request.'
    });
  }
});

// Emergency rapid endpoint
app.post('/api/emergency', (req, res) => {
  const { phone, address, symptom } = req.body;

  const referenceId = `EMERGENCY-${Math.floor(1000 + Math.random() * 9000)}`;
  console.log(`[CRITICAL EMERGENCY] Ref: ${referenceId} Phone: ${phone} Address: ${address}`);

  res.status(200).json({
    success: true,
    referenceId,
    estimatedArrival: '35 - 50 minutes',
    status: 'UNITS_NOTIFIED',
    contactSupport: '1-800-555-FLOW'
  });
});

// Fallback 404
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`🚀 ClearFlow Septic Platform API running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
});
