import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/SANKAKU_LOGO.jpg"
                  alt="산카쿠 로고"
                  fill
                  className="object-cover rounded-lg"
                  sizes="40px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">산카쿠</h3>
                <p className="text-sm text-gray-400">SANKAKU</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              정성 가득한 한 끼. 언제나 정직하게, 따뜻하게, 정성스럽게.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">빠른 링크</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/brand-story"
                  className="hover:text-white transition-colors"
                >
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-white transition-colors"
                >
                  메뉴
                </Link>
              </li>
              <li>
                <Link
                  href="/store-info"
                  className="hover:text-white transition-colors"
                >
                  매장안내
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-voice"
                  className="hover:text-white transition-colors"
                >
                  고객의 소리
                </Link>
              </li>
              <li>
                <Link
                  href="/franchise"
                  className="hover:text-white transition-colors"
                >
                  창업안내
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">연락처</h4>
            <div className="space-y-3 text-gray-400">
              <div>📞 02-1234-5678</div>
              <div>📧 info@sankaku.kr</div>
              <div>📍 서울특별시 강남구</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 산카쿠. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
