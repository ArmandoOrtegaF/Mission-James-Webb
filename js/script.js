const dialogFrame = document.getElementById('dialog-frame');
const images = document.getElementsByTagName("img");

var dialog = 0;

var hcounter = 0;
var jcounter = 0;
var counter = 0;

function iniCounter(){
    document.getElementById("counter").innerHTML = counter + "/ 5";
}
function index(){
  location.href = "index.html";
}

window.onload = function() {
    iniCounter();
  };

function getId(img)
{
    if(document.getElementById(img.id).classList.contains("memo-card-border")){
        document.getElementById(img.id).classList.remove("memo-card-border");
        if(counter > 0){
            counter--;
            document.getElementById("counter").innerHTML = counter + "/ 5";
        }
        
        
        
    }else{
            if(counter < 5){
                document.getElementById(img.id).classList.add("memo-card-border");
                counter++;
                document.getElementById("counter").innerHTML = counter + "/ 5";
            }
            if(counter == 5){
              document.getElementById("results").classList.remove("hidden");
            }
            
            
    }
}


  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        
        switch(dialog) {
            case 0:
                dialogFrame.textContent = 'Hello! My name is BeepBop and I am a space assistant. I am in charge of the James Webb Space Telescope but I am new in my job. Can you help me please?';
              break;
            case 1:
                dialogFrame.textContent = 'The James Webb Space Telescope was launched on December 25, 2021, being the largest, most powerful, and most complex space science telescope ever built. This telescope will allow us to study how galaxies evolve and the birth of stars and planets. Pretty amazing, right?';
              break;
            case 2:
                dialogFrame.textContent = 'Instead of orbiting Earth like the Hubble, Webb telescope will be orbiting the Sun, 1 million miles away from Earth!';
              break;
            case 3:
                dialogFrame.textContent = 'Let\'s take a look at it!';
              break;
            case 4:
                dialogFrame.textContent = 'The telescope has 3 main parts: The Optical Telescope Element (OTE), The Integrated Science Instrument Module (ISIM) and the Spacecraft Element.';
              break;
            case 5:
                dialogFrame.textContent = 'Shall we begin with the process?';
              break;
            case 6:
                dialogFrame.textContent = 'Great! come with me…';
              break;
            case 7:
                dialogFrame.textContent = 'This is the spacecraft Element, which provides the support functions for the operation of the telescope and houses the six major subsystems needed for its operation.';
              break;
            case 8:
                dialogFrame.innerHTML = 'Do you see those layers? they\'re called  the Sunshield subsystem, it keeps the heat of the sun away from the OTE and ISIM because they need to be extra cold for operating (-370 °F !).'
              break;
            case 9:
                dialogFrame.textContent = 'Let\'s continue with the Optical Telescope Element (OTE), which is comprised of a principal and  secondary mirror, these are the eye of the observatory and it gathers the light coming from space and provides it to the instruments in the ISIM.';
              break;
            case 10:
              dialogFrame.textContent = 'Help me find a something interesting to capture. Remember Webb Telescope catches infrared light';
              break;
            case 11:
                dialogFrame.textContent = 'Excellent! now let\'s take a look at the ISIM and look what we\'ve captured.';
              break;
            case 12:
                dialogFrame.textContent = 'The Integrated Science Instrument Module (ISIM) houses the four main instruments that will detect light captured by the OTE and processes it.';
              break;
            case 13:
                dialogFrame.textContent = 'Lets see how\'s the processing going...';
              break;
            case 14:
              dialogFrame.textContent = 'Now that we understand how the telescope works, we can take a look at the images it captures. Do you want to take a look?';
              break;
            case 15:
                dialogFrame.textContent = 'They look awesome! On the other side, we have the same image taken from the Hubble telescope, which is not as sharp.';
              break;
            case 16:
                dialogFrame.textContent = 'This is, because stars and planets that are just forming lie hidden behind cocoons of dust that absorb visible light, so they can only be seen by the infrared light which is the range of the electromagnetic spectrum used by Webb\'s Telescope.';
              break;
            case 17:
                dialogFrame.innerHTML = 'You have learned a lot today, are you up for a challenge? Use your newly acquired knowledge to identify which images were taken by JWST (remember those look sharper that the ones taken by Hubble)' + '<button class="btn btn-dark" onclick="window.location=\'memo_card.html\';"  style="margin: 0px 200px">Play</button>';
              break;
            default:
              break;
              // code block
          }
          dialog += 1;
    }
});

/*
switch(dialog) {
    case 0:
        dialogFrame.textContent = 'Hola! Mi nombre es BeepBop y soy un asistente espacial. Soy el encargado del Telescopio Espacial James Webb, pero soy nuevo en mi trabajo. ¿Me ayudarías?';
      break;
    case 1:
        dialogFrame.textContent = 'El 25 de diciembre de 2021 se lanzó el telescopio espacial James Webb, que es el mayor, más potente y más complejo telescopio de ciencia espacial jamás construido. Este telescopio permitirá estudiar cómo evolucionan las galaxias y el nacimiento de estrellas y planetas. Bastante sorprendente, ¿verdad?';
      break;
    case 2:
        dialogFrame.textContent = 'En lugar de orbitar la Tierra como el Hubble, el telescopio Webb orbitará alrededor del Sol, ¡a 1 millón de millas de la Tierra!';
      break;
    case 3:
        dialogFrame.textContent = '¡Vamos a echarle un vistazo!';
      break;
    case 4:
        dialogFrame.textContent = 'El telescopio consta de 3 partes principales: El elemento óptico del telescopio (OTE), el módulo de instrumentos científicos integrados (ISIM) y la nave espacial.';
      break;
    case 5:
        dialogFrame.textContent = '¿Empezamos con el proceso?';
      break;
    case 6:
        dialogFrame.textContent = 'Genial, ven conmigo... ';
      break;
    case 7:
        dialogFrame.textContent = 'La nave espacial proporciona las funciones de apoyo para el funcionamiento del telescopio y alberga los seis principales subsistemas necesarios para su funcionamiento.';
      break;
    case 8:
        dialogFrame.innerHTML = '¿Ves esas capas? Se llaman subsistema de Parasol, y sirven para mantiener el calor del sol alejado del OTE y del ISIM ya que necesitan estar extra fríos para funcionar (¡370 °F!).'
      break;
    case 9:
        dialogFrame.textContent = 'Sigamos con el Elemento de Telescopio Óptico (OTE), que está compuesto por un espejo principal y otro secundario, estos son el ojo del observatorio ya que recogen la luz procedente del espacio y la proporciona a los instrumentos del ISIM.';
      break;
    case 10:
      dialogFrame.textContent = '¡Ayúdame a capturar la luz! El telescopio Webb solo debe atrapar la luz infraroja.';
      break;
    case 11:
        dialogFrame.textContent = '¡Excelente! Ahora vamos a echar un vistazo al ISIM y a ver qué hemos captado.';
      break;
    case 12:
        dialogFrame.textContent = 'El Módulo de Instrumentos Científicos Integrados (ISIM) alberga los cuatro instrumentos principales que detectarán la luz captada por el OTE y la procesarán.';
      break;
    case 13:
        dialogFrame.textContent = 'Veamos cómo va el procesamiento.';
      break;
    case 14:
      dialogFrame.textContent = 'Ahora que entendemos cómo funciona el telescopio, podemos ver las imágenes que capta. ¿Quieres echar un vistazo?';
      break;
    case 15:
        dialogFrame.textContent = '¡Tienen un aspecto impresionante! En el otro lado, tenemos la misma imagen tomada desde el telescopio Hubble, y podemos apreciar que no es tan nítida. ';
      break;
    case 16:
        dialogFrame.textContent = 'Esto se debe a que las estrellas y los planetas que se están formando se esconden detrás de capullos de polvo que absorben la luz visible, por lo que sólo se pueden ver por la luz infrarroja que es el rango del espectro electromagnético que utiliza el Telescopio Webb.';
      break;
    case 17:
        dialogFrame.innerHTML = 'Hoy has aprendido mucho, ¿te apuntas a un reto? Utiliza lo que aprendiste para identificar las imágenes tomadas por el JWST (recuerda que son más nítidas que las tomadas por el Hubble)' + '<button class="btn btn-dark" onclick="window.location=\'memo_card.html\';"  style="margin: 0px 200px">Play</button>';
      break;
    default:
      break;
      // code block
  }
  */
