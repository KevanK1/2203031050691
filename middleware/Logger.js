const loggerMiddleware = async (req, res, next) => {
  const { stack, level, package: pkg, message } = req.body;

  const payload = {
    stack: stack || 'backend',
    level: level || 'info',
    package: pkg || 'controller',
    message: message || `Request made to ${req.method} ${req.url}`
  };

  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <your-token-here>'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log('Log sent:', result); // optional
    next(); // 🔥 This makes sure the route handler runs after middleware
  } catch (error) {
    console.error('Log failed:', error.message);
    next(); // continue anyway even if log fails
  }
};

module.exports = loggerMiddleware;
