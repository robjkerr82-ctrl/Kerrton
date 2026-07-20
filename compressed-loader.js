(async()=>{
  try {
    if (typeof DecompressionStream !== 'function') throw new Error('This browser does not support secure local decompression. Please update the browser.');
    const binary=atob(window.__SECOND_WIND_GZIP||'');
    delete window.__SECOND_WIND_GZIP;
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const source=await new Response(stream).text();
    (0,eval)(source);
  } catch (error) {
    console.error(error);
    const target=document.getElementById('welcomeScreen');
    if(target) target.innerHTML='<div class="hero"><div class="notice danger"><strong>The interview could not start.</strong>'+String(error.message||error)+'</div><p>Please use a current version of Safari, Chrome, Edge or Firefox.</p></div>';
  }
})();
