import { useEffect } from 'react';

const ReclameAquiSeal = () => {
    useEffect(() => {
        // Remove any existing script to prevent duplicates
        const existingScript = document.getElementById('ra-embed-verified-seal');
        if (existingScript) {
            existingScript.remove();
        }

        // Create and append the Reclame Aqui script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'ra-embed-verified-seal';
        script.src = 'https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js';
        script.setAttribute('data-id', 'ZkdKNlZPeTFzNUV6XzVMUjpmb3J0YWwtZW5nZW5oYXJpYS1zb2xhci1sdGRh');
        script.setAttribute('data-target', 'ra-verified-seal');
        script.setAttribute('data-model', 'horizontal_1');
        script.async = true;

        // Append script to the seal container
        const sealContainer = document.getElementById('ra-verified-seal');
        if (sealContainer) {
            sealContainer.appendChild(script);
        }

        // Cleanup function
        return () => {
            const scriptToRemove = document.getElementById('ra-embed-verified-seal');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, []);

    return (
        <div id="ra-verified-seal" className="mt-6"></div>
    );
};

export default ReclameAquiSeal;
