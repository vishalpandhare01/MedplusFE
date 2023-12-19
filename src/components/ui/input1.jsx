import styles from "./input1.module.scss";

export default function LineInput({ lable, placeholder, setUserinput, type }) {
  return (
    <>
      <div class="relative">
        <input
          className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparenttext-sm placeholder:text-transparent disabled:pointer-events-none 
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2
  outline-none
  "
          type={type}
          name={lable}
          placeholder={placeholder}
          onChange={(e) => setUserinput(e.target.value)}
        />
        <label
          for="hs-floating-underline-input-passowrd"
          class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500"
        >
          {lable}
        </label>
      </div>
    </>
  );
}
