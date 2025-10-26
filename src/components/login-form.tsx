import { Link } from "react-router"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/services/firebaseConnection"
import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"

export function LoginForm({className, ...props}: React.ComponentProps<"div">) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loginDetail, setLoginDetail] = useState({});
const navigate = useNavigate();

async function loginUser(e: FormEvent){
  e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
    .then((value) => {
      setLoginDetail({
        uid: value.user.uid,
        email: value.user.email
      })
    toast.success(
      <div>
        <h2 className="text-white font-bold text-sm">Login efetuado</h2>
        <p className="text-gray-100/60 text-sm">O login foi efetuado com sucesso.</p>
      </div>
    );
    navigate("/admin/dashboard")
    })
    .catch(() => {
      toast.error(
      <div>
        <h2 className="text-[#dedede] font-bold text-sm">Erro no Login</h2>
        <p className="text-gray-100/60 text-sm">Ocorreu um erro nas credenciais ao tentar fazer login.</p>
      </div>
    );
    })
  }


  return (
    <div className={cn("flex flex-col gap-6 dark", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Faça login na sua conta</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para fazer login. 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginUser}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemplo.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                </div>
                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
              </Field>
              <Field>
                <Button type="submit" className="cursor-pointer bg-[#dedede88] hover:bg-[#dedede] duration-400">Entrar</Button>
                <FieldDescription className="text-center">
                  Não possuí uma conta? <Link to={"/signup"} className="hover:text-[#dedede] duration-400">Cadastre-se</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}