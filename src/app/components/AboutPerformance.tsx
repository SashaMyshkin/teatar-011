import Image from 'next/image';
export default function AboutPerformance() {
    return (
        <div>
            {/* Header */}
            <div className="text-white text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold">Predstava</h1>
                    <p className="text-xl italic text-yellow-500">Slogan</p>
                </div>
            </div>

            <div className="">
            
                <Image
                    className=""
                    width={600}
                    height={400}
                    src='/predstave/let-iznad-kukavicjeg-gnezda/bordel.jpg'
                    alt="opis"
                />
                <p className="text-justify">nešto o predstavi</p>
            </div>
            <div className="">
                    <Image
                    className=""
                    width={600}
                    height={400}
                    src='/predstave/let-iznad-kukavicjeg-gnezda/bordel.jpg'
                    alt="opis"
                />
                <p className="text-justify">nešto o predstavi</p>
            </div>

            {/* Divider */}
            <hr className="max-w-3xl mx-auto my-10" />
        </div>
    );
}
