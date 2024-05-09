import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");
export const REPO_ROOT = path.join(PKG_ROOT, "../");

export const TITLE_TEXT = ` ________  __                      _______                         __                         
/        |/  |                    /       \                       /  |                        
$$$$$$$$/ $$ |  ______   __    __ $$$$$$$  |  ______    _______  _$$ |_     ______    ______  
$$ |__    $$ | /      \ /  \  /  |$$ |__$$ | /      \  /       |/ $$   |   /      \  /      \ 
$$    |   $$ |/$$$$$$  |$$  \/$$/ $$    $$< /$$$$$$  |/$$$$$$$/ $$$$$$/   /$$$$$$  |/$$$$$$  |
$$$$$/    $$ |$$    $$ | $$  $$<  $$$$$$$  |$$ |  $$ |$$      \   $$ | __ $$    $$ |$$ |  $$/ 
$$ |      $$ |$$$$$$$$/  /$$$$  \ $$ |  $$ |$$ \__$$ | $$$$$$  |  $$ |/  |$$$$$$$$/ $$ |      
$$ |      $$ |$$       |/$$/ $$  |$$ |  $$ |$$    $$/ /     $$/   $$  $$/ $$       |$$ |      
$$/       $$/  $$$$$$$/ $$/   $$/ $$/   $$/  $$$$$$/  $$$$$$$/     $$$$/   $$$$$$$/ $$/       
`;

export const DEFAULT_APP_NAME = "FlexRoster";
