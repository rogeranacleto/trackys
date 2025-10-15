import { Button } from "@/components/ui/button"
import { auth } from "@/services/firebaseConnection"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Link } from "react-router"
import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"
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

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const navigate = useNavigate();

async function createUser(e: FormEvent){
  e.preventDefault();
  if(password !== confirmPassword){
    alert("As senhas devem ser iguais!")
    return;
  }
  try{
    const userCredential = createUserWithEmailAndPassword(auth, email, password)
    const nameUser = (await userCredential).user
    await updateProfile(nameUser, {
      displayName: name
    })
    toast.success(
      <div>
        <h2 className="text-white font-bold text-sm">Conta criada</h2>
        <p className="text-gray-100/60 text-sm">A conta foi criada com sucesso.</p>
      </div>
    );
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/login")
  }catch(error){
    toast.error(
      <div>
        <h2 className="text-white font-bold text-sm">Erro ao criar conta</h2>
        <p className="text-gray-100/60 text-sm">Algo deu errado, acione o suporte para mais informações.</p>
      </div>
    );
  }
}

  return (
    <Card className={("flex flex-col gap-6 dark")}{...props}>
      <CardHeader>
        <CardTitle>Crie uma conta</CardTitle>
        <CardDescription>
          Insira suas informações abaixo para criar sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
              <Input id="name" type="text" placeholder="" required onChange={(e) => setName(e.target.value)}/>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="email@exemplo.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FieldDescription>
                Usaremos isso para entrar em contato com você. Não compartilharemos seu e-mail com mais ninguém.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Senha</FieldLabel>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
              <FieldDescription>
                Deve ter pelo menos 6 caracteres.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirmar Senha
              </FieldLabel>
              <Input id="confirm-password" type="password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
              <FieldDescription>Por favor confirme sua senha.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" className="cursor-pointer bg-[#dedede88] hover:bg-[#dedede] duration-400" onClick={createUser}>Criar conta</Button>
                <FieldDescription className="px-6 text-center">
                  Ja tem uma conta? <Link to={"/login"} className="hover:text-[#D0D0D0] duration-400">Entrar</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
