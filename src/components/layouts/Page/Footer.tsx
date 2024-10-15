const Footer = () => {
    return (
        <footer className="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
            <div className="flex-1 justify-center max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center">
                <div className="text-md text-center text-gray-200 font-semibold">
                    Copyright © {new Date().getFullYear()} {"Nguyễn Khánh Quy"}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
