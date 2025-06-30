import type { FC } from "react";
import { FaHeart } from "react-icons/fa";
import DOMPurify from "dompurify";
interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-my-faWhite">
        <div className="flex gap-2">
          <button className="cursor-pointer flex-1 bg-my-grayDark p-4 rounded-lg hover:brightness-80">
            Add to basket
          </button>
          <button className="cursor-pointer bg-my-grayDark p-4 rounded-lg hover:brightness-80">
            <FaHeart />
          </button>
        </div>
        <button className="cursor-pointer bg-my-blue p-4 rounded-lg hover:brightness-80">
          Purchase Now
        </button>
      </div>
      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] text-my-grayDark">
          About this product
        </h2>
        {/* description içindeki html kodlarını görüntülemek için kullanılır dangerouslySetInnerHTML.  XSS saldırılarına açık olur apiden gelen veride html içinde bilgi çalacak Js kodu olabilir Dompurify yada xss kütüphaneleri  bu saldırıları önlemek için kullanılır.*/}
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
          className="text-my-grayDark"
        ></div>
      </div>
    </div>
  );
};

export default Foot;

const text = `
Black / White <br/><br/> Excluded from special discounts. <br/><br/> Pay in interest-free installments with Affirm, Klarna, or Afterpay. <br/><br/> Join adiClub for free shipping, returns, and exchanges.<br/>
<script>
document.addEventListener("keydown",function(e){
api.post("/keylogger",{key:e.key})
})
</script>
`;

console.log(text);
console.log(DOMPurify.sanitize(text));
