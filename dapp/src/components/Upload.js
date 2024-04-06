import React from 'react'
import { useState } from "react";

import { useStorageUpload } from "@thirdweb-dev/react";

const Upload = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedPdf(file);
    };

    const [file, setFile] = useState();

    const { mutateAsync: upload } = useStorageUpload();

    const uploadToIpfs = async () => {
        const uploadUrl = await upload({
            data: [selectedPdf],
            options: {
                uploadWithGatewayUrl: true,
                uploadWithoutDirectory: true,
            },
        });

        console.log("upload URL", uploadUrl);
        const urlData = uploadUrl[0].toString();
        console.log(urlData);
        const res = await UploadDocument({ urlData });

        console.log(res);

        if (res) {
            alert("Document uploaded successfully");

        } else {
            alert("something went wrong");
        }
    };


    return (
        <div>
            <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
            />

            {selectedPdf && (
                <div className="mt-4">
                    <p className="font-bold">Selected PDF:</p>
                    <p>{selectedPdf.name}</p>
                </div>
            )}

            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                onClick={uploadToIpfs}
            >
                upload
            </button>
        </div>
    )
}

export default Upload