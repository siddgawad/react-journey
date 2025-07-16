import { useRecoilValue } from "recoil";
import { feedbackAtom } from "../atom/feedbackAtom";

export const FeedbackList = () => {
  const list = useRecoilValue(feedbackAtom);

  return (
    <div>
      <ul>
        {list.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
};
