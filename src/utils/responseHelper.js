const formatResponse = (message, metadata = {}) => {
    return {
        message,
        metadata
    };
};

const sendReply = (res, message, metadata) => {
    const response = formatResponse(message, metadata);
    res.json(response);
};

module.exports = {
    formatResponse,
    sendReply
};