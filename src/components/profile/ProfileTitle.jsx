function ProfileTitle({ title, items }) {
  const parseYearMonth = (ym) => {
    const m = /^(\d{4})\.(\d{2})$/.exec(ym?.trim() || "");
    if (!m) return null;
    const y = Number(m[1]);
    const mo = Number(m[2]);
    if (mo < 1 || mo > 12) return null;
    return { y, mo };
  };

  // 각 기간의 모든 고유 '년-월'을 Set에 담아 실제 근무 개월 수 계산
  const calculateTotalMonths = (data) => {
    if (!Array.isArray(data)) return 0;

    const uniqueMonths = new Set();

    data.forEach((it) => {
      if (!it.date) return;
      const [startRaw, endRaw] = it.date.split("-").map((s) => s.trim());
      const start = parseYearMonth(startRaw);
      if (!start) return;

      let end;
      if (!endRaw || endRaw === "현재") {
        const now = new Date();
        end = { y: now.getFullYear(), mo: now.getMonth() + 1 };
      } else {
        end = parseYearMonth(endRaw);
        if (!end) return;
      }

      const startIdx = start.y * 12 + (start.mo - 1);
      const endIdx = end.y * 12 + (end.mo - 1);

      // 시작월부터 종료월까지 Set에 인덱스 추가 (중복 자동 제거)
      for (let idx = startIdx; idx <= endIdx; idx++) {
        uniqueMonths.add(idx);
      }
    });

    return uniqueMonths.size;
  };

  const renderSuffix = () => {
    if (title !== "업무경험" || !Array.isArray(items)) return "";

    const totalMonths = calculateTotalMonths(items);
    if (totalMonths <= 0) return "";

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const nth = years + 1;

    const yPart = years > 0 ? `총 ${years}년` : "";
    const mPart = months > 0 ? `${months}개월` : (years === 0 ? "0개월" : "");
    const duration = [yPart, mPart].filter(Boolean).join(" ");

    return ` (${duration}, 업력 ${nth}년차)`;
  };

  return (
    <p className="profile-title">
      <span>
        {title}
        {renderSuffix()}
      </span>
    </p>
  );
}
export default ProfileTitle;
