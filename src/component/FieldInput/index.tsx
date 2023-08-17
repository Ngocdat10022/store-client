import Eye from "@/assets/Icons/Eye";
import HidenEye from "@/assets/Icons/HidenEye";
import { IFormLogin } from "@/interface/formLogin.interface";
import { IFormRegister } from "@/interface/formRegister.interface";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface IPropsFieldInput {
  placeholder: string;
  name: string;
  type: "password" | "text" | "number";
  onChange?: (e: any) => void;
  value?: string;
  register: UseFormRegister<IFormRegister> | UseFormRegister<IFormLogin> | any;
  messageError?: string;
}
const FieldInput = ({
  placeholder,
  name,
  type,
  value,
  register,
  messageError,
  onChange,
}: IPropsFieldInput) => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div className="relative flex-1 w-full">
      {type === "password" ? (
        <>
          <input
            onChange={onChange}
            name={name}
            className="w-[100%] px-4 py-2 border-2 rounded-sm border-greyColor pr-10"
            placeholder={placeholder}
            type={isPassword ? "password" : "text"}
            value={value}
            {...register(name)}
          />
          <span
            className="absolute right-3 top-1/2 translate-y-[-50%] cursor-pointer"
            onClick={() => setIsPassword(!isPassword)}
          >
            {isPassword ? <HidenEye /> : <Eye />}
          </span>
          <span className="text-mainColor ">{messageError || ""}</span>
        </>
      ) : (
        <>
          <input
            name={name}
            className="w-[100%] px-4 py-2 border-2 rounded-sm border-greyColor"
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
            {...register(name)}
          />
          <span className="text-mainColor ">{messageError || ""}</span>
        </>
      )}
    </div>
  );
};

export default FieldInput;
