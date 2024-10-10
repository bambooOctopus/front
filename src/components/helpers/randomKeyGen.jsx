import { v4 as uuidv4 } from 'uuid';

export const randomKeyGen = () => {
    let randomKey = uuidv4()
    return randomKey
}