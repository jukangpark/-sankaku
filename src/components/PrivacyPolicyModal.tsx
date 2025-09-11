"use client";

import { useState } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* 헤더 */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              개인정보처리방침
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {/* 내용 */}
          <div className="text-sm text-gray-700 space-y-6">
            <div>
              <p>
                '산카쿠(SANKAKU)'는 (이하 '회사'는) 고객님의 개인정보를
                중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을
                준수하고 있습니다.
              </p>
              <p className="mt-2">
                회사는 개인정보처리방침을 통하여 고객님께서 제공하시는
                개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
                개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>
              <p className="mt-2">
                회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는
                개별공지)을 통하여 공지할 것입니다.
              </p>
              <p className="mt-2 font-semibold">
                본 방침은 : 2025년 1월 1일부터 시행됩니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                1. 수집하는 개인정보 항목
              </h3>
              <p className="mb-2">
                회사는 상담 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
              </p>
              <div className="ml-4">
                <p className="font-semibold">가맹점 문의</p>
                <p>- 수집항목 : 이름, 연락처, 희망 지역, 문의내용 등</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                2. 개인정보의 수집 및 이용목적
              </h3>
              <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
              <ul className="ml-4 mt-2 list-disc">
                <li>가맹점 상담 및 문의에 대한 답변</li>
                <li>가맹점 창업 관련 서비스 제공</li>
                <li>고객 지원 및 서비스 개선</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                3. 개인정보의 보유 및 이용기간
              </h3>
              <p className="mb-2">
                원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당
                정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할
                필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한
                기간 동안 회원정보를 보관합니다.
              </p>
              <div className="ml-4">
                <p className="font-semibold">보존 항목 및 보존 기간</p>
                <ul className="list-disc mt-2">
                  <li>계약 또는 청약철회 등에 관한 기록 : 3년</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                4. 개인정보의 파기절차 및 방법
              </h3>
              <p className="mb-2">
                회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
                정보를 지체없이 파기합니다.
              </p>
              <div className="ml-4">
                <p className="font-semibold">파기절차</p>
                <p className="mt-1">
                  고객님이 문의 등을 위해 입력하신 정보는 목적이 달성된 후
                  별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호
                  사유에 따라 일정 기간 저장된 후 파기되어집니다.
                </p>
                <p className="font-semibold mt-3">파기방법</p>
                <p className="mt-1">
                  전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
                  기술적 방법을 사용하여 삭제합니다.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                5. 개인정보 제공
              </h3>
              <p>
                회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
                다만, 아래의 경우에는 예외로 합니다.
              </p>
              <ul className="ml-4 mt-2 list-disc">
                <li>이용자들이 사전에 동의한 경우</li>
                <li>
                  법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                  방법에 따라 수사기관의 요구가 있는 경우
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                6. 이용자의 권리와 그 행사방법
              </h3>
              <p className="mb-2">
                이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
                수정할 수 있으며 삭제를 요청할 수도 있습니다.
              </p>
              <p className="mb-2">
                개인정보 조회, 수정, 삭제를 위해서는 개인정보관리책임자에게
                서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                7. 개인정보에 관한 민원서비스
              </h3>
              <p className="mb-2">
                회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
                처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를
                지정하고 있습니다.
              </p>
              <div className="ml-4">
                <p className="font-semibold">고객서비스 담당 부서</p>
                <p>부서명 : 산카쿠 고객센터</p>
                <p>전화번호 : 010-5841-0150</p>
                <p>이메일 : info@sankaku.kr</p>

                <p className="font-semibold mt-3">개인정보관리 책임자</p>
                <p>성명 : 산카쿠 개인정보관리책임자</p>
                <p>전화번호 : 010-5841-0150</p>
                <p>이메일 : info@sankaku.kr</p>
              </div>
              <p className="mt-3">
                기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래
                기관에 문의 가능합니다.
              </p>
              <ul className="ml-4 mt-2 list-disc">
                <li>
                  개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
                </li>
                <li>대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)</li>
                <li>경찰청 사이버수사국 (police.go.kr / 국번없이 182)</li>
              </ul>
            </div>
          </div>

          {/* 하단 버튼 */}
          <div className="flex justify-end mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
