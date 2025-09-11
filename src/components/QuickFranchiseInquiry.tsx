"use client";

import { useState } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

interface QuickFranchiseInquiryProps {
  isVisible: boolean;
  onClose: () => void;
}

const QuickFranchiseInquiry = ({
  isVisible,
  onClose,
}: QuickFranchiseInquiryProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    region: "",
    agreeToPrivacy: false,
  });

  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (추후 구현)
    console.log("가맹 문의 제출:", formData);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      {/* X 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold w-6 h-6 flex items-center justify-center"
      >
        ×
      </button>

      {/* 모바일 레이아웃 */}
      <div className="block sm:hidden px-4 py-4">
        {/* 제목과 연락처 - 중앙정렬 */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            빠른 가맹 문의
          </h3>
          <p className="text-xl font-bold text-gray-900 mb-1">010-5841-0150</p>
          <p className="text-sm text-gray-500">
            부재 시 문자 남겨주시면 순차적으로 응대해 드리겠습니다.
          </p>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-3 gap-2 mb-3">
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-2 py-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent min-w-0"
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="연락처"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-2 py-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent min-w-0"
              required
            />
            <input
              type="text"
              name="region"
              placeholder="희망 지역"
              value={formData.region}
              onChange={handleInputChange}
              className="w-full px-2 py-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent min-w-0"
              required
            />
          </div>

          {/* 제출 버튼 - 화면 너비 전체 */}
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium mb-3"
          >
            문의하기
          </button>

          {/* 개인정보처리방침 동의 */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToPrivacy"
                checked={formData.agreeToPrivacy}
                onChange={handleInputChange}
                className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                required
              />
              <label className="text-xs text-gray-700">
                개인정보처리방침에 동의합니다.
              </label>
            </div>
            <button
              type="button"
              className="text-xs text-gray-600 hover:text-gray-900 underline"
              onClick={() => setIsPrivacyModalOpen(true)}
            >
              전문보기
            </button>
          </div>
        </form>
      </div>

      {/* PC/태블릿 레이아웃 */}
      <div className="hidden sm:block px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          {/* 제목과 연락처 */}
          <div className="flex-shrink-0 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              빠른 가맹 문의
            </h3>
            <p className="text-xl font-bold text-gray-900 mb-1">
              010-5841-0150
            </p>
            <p className="text-sm text-gray-500">
              부재 시 문자 남겨주시면 순차적으로 응대해 드리겠습니다.
            </p>
          </div>

          {/* 폼 */}
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent min-w-0"
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="연락처"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent min-w-0"
                required
              />
              <input
                type="text"
                name="region"
                placeholder="희망 지역"
                value={formData.region}
                onChange={handleInputChange}
                className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent min-w-0"
                required
              />
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium mb-3"
            >
              문의하기
            </button>

            {/* 개인정보처리방침 동의 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                  required
                />
                <label className="text-xs sm:text-sm text-gray-700">
                  개인정보처리방침에 동의합니다.
                </label>
              </div>
              <button
                type="button"
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 underline"
                onClick={() => setIsPrivacyModalOpen(true)}
              >
                전문보기
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 개인정보처리방침 모달 */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default QuickFranchiseInquiry;
