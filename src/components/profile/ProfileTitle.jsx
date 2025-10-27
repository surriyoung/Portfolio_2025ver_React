function ProfileTitle({ title, items }) {
  const parseYearMonth = (ym) => {
    const m = /^(\d{4})\.(\d{2})$/.exec(ym?.trim() || "");
    if (!m) return null;
    const y = Number(m[1]);
    const mo = Number(m[2]); // 1~12
    if (mo < 1 || mo > 12) return null;
    return { y, mo };
  };

  // 기간 문자열 "YYYY.MM - YYYY.MM" | "YYYY.MM - 현재" → 개월 수(포함 계산)
  const diffMonthsInclusive = (range) => {
    if (!range) return 0;
    const [startRaw, endRaw] = range.split("-").map((s) => s.trim());
    const start = parseYearMonth(startRaw);
    if (!start) return 0;

    let end;
    if (!endRaw || endRaw === "현재") {
      const now = new Date();
      end = { y: now.getFullYear(), mo: now.getMonth() + 1 }; // JS month 0-based → +1
    } else {
      end = parseYearMonth(endRaw);
      if (!end) return 0;
    }

    const startIdx = start.y * 12 + (start.mo - 1);
    const endIdx = end.y * 12 + (end.mo - 1);
    const delta = endIdx - startIdx;
    return delta >= 0 ? delta + 1 : 0; // 포함 계산(+1)
  };

  const renderSuffix = () => {
    if (title !== "업무경험" || !Array.isArray(items)) return "";

    // items의 date 합산
    const totalMonths = items.reduce(
      (sum, it) => sum + diffMonthsInclusive(it.date),
      0
    );

    if (totalMonths <= 0) return "";

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // n년차: 총 개월이 0 초과면 years + 1년차로 표기 (예: 1년 2개월 → 2년차)
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
