import Button from "@/components/base/Button"
import InputWithLabel from "@/components/Composition/InputWithLabel"

const SecondAuth = () => {
    return (
        <div className="w-80">
            <form
                className="flex flex-col gap-14"
            >
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col w-full">
                        <InputWithLabel
                            id="centerPassword"
                            placeholder="이메일로 전송된 인증값을 입력해주세요."
                            labelName="2차 인증"
                            type="password"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Button
                        type="submit"
                        className="primaryButtonDefault"
                    >
                        로그인
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SecondAuth;