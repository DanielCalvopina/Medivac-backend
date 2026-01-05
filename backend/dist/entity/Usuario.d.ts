import { PerfilesDeUsuario } from "./PerfilesDeUsuario";
export declare class Usuario {
    usrRuc: string;
    usrNombre: string;
    usrApellido: string;
    usrIsVerf: boolean | null;
    usrCodeVerf: string | null;
    usrPassword: string;
    usrStatus: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    usrTelefono: string | null;
    usrCorreo: string | null;
    perfilesDeUsuarios: PerfilesDeUsuario[];
}
