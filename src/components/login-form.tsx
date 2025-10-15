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
const navigate = useNavigate();

async function loginUser(e: FormEvent){
  e.preventDefault();
  try{
    await signInWithEmailAndPassword(auth, email, password)
    toast.success(
      <div>
        <h2 className="text-white font-bold text-sm">Login efetuado</h2>
        <p className="text-gray-100/60 text-sm">O login foi efetuado com sucesso.</p>
      </div>
    );
    navigate("/dashboard")
  }catch (error: any) {
    if (error.code === "auth/weak-password") {
      toast.error(
      <div>
        <h2 className="text-white font-bold text-sm">Senha Fraca</h2>
        <p className="text-gray-100/60 text-sm">Precisa ter no mínimo 6 caracteres.</p>
      </div>
    );
    } else if (error.code === "auth/email-already-in-use") {
        toast.error(
        <div>
          <h2 className="text-white font-bold text-sm">Email Existente</h2>
          <p className="text-gray-100/60 text-sm">Esse email já está em uso.</p>
        </div>
    );
    } else {
        toast.error(
        <div>
          <h2 className="text-white font-bold text-sm">Erro</h2>
          <p className="text-gray-100/60 text-sm">Ocorreu um erro inesperado</p>
        </div>
    );
    }
  }
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
