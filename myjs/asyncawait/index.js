function wait(ms){
    if(ms > 2000) throw new Error(ms);
    return new Promise(r => setTimeout(r,ms));
}

async function main(){
    const duration = [1000, 2000, 3000, 4000];
    let all = duration.map(ms => wait(ms))
    try{
        await Promise.all(all);
        console.log('Promise all done!');
    }catch(e){
        console.log('Promise all error at here, ',e);
    }

    let each = duration.map(ms => wait(ms))
    each.forEach(async (func, index) => {
        try{
            await func
            console.log('Promise each done!');
        }catch(e){
            console.log('Promise each error at here, ',e);
        }
    })
}
main();