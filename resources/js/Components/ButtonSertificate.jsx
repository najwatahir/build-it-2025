import React from 'react';
import PropTypes from 'prop-types';

const ButtonViewCertificate = ({ userName, status }) => {
    const handleViewCertificate = () => {
        const folderId = "18j-e16n2mzNB-r7iAxH_pG6N8y5vvT_9";
        const searchUrl = `https://drive.google.com/drive/u/0/folders/${folderId}?q=${encodeURIComponent(
            `${userName}.jpg`
        )}`;
        window.open(searchUrl, '_blank');
    };

    return (
        <button
            onClick={handleViewCertificate}
            disabled={!status}
            className={`font-montserrat py-3 md:px-6 px-3 text-sm md:text-lg uppercase font-bold text-white rounded-lg transition-all ease-in-out duration-300 text-center ${status ? 'bg-primary hover:bg-secondary' : 'bg-primary/80 cursor-not-allowed'
                }`}
        >
            {status ? 'Lihat Sertifikat' : 'Belum Tersedia'}
        </button>
    );
};

ButtonViewCertificate.propTypes = {
    userName: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default ButtonViewCertificate;
