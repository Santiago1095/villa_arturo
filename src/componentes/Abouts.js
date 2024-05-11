import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";

export default function Abouts() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 py-5 p-5 fst-italic">
      <div className="col">
        <div className="card h-100 border-5 rounded-3  border-light p-2">
          <img src={img21} className="rounded-3" />
          <div className="card-body">
            <h5 className="card-title">GESTIÓN DE PROYECTOS</h5>
            <p className="card-text ">
              En Villa Arturo te acompañamos desde tu idea inicial del proyecto
              pasando por la ejecución del mismo, hasta la terminación del
              proyecto. Gestionamos todos los trámites que conlleva un proyecto
              de arquitectura, coordinando todas las fases del proyecto para
              hacer realidad su idea.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-5 rounded-3  border-light p-2">
          <img src={img22} className="rounded-3" />
          <div className="card-body">
            <h5 className="card-title">INGENIERÍA</h5>
            <p className="card-text">
              En Villa Arturo nos sumergimos en una amplia diversidad de campos,
              comprometiéndonos a brindar soluciones integrales que superen las
              expectativas de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-5 rounded-3  border-light p-2">
          <img src={img23} className="rounded-3" />
          <div className="card-body">
            <h5 className="card-title">URBANISMO</h5>
            <p className="card-text">
              En Villa Arturo hemos proyectado ordenaciones urbanas de
              considerables sectores de suelo urbanizable. Este compromiso se ha
              caracterizado por un enfoque meticuloso, arraigado en la premisa
              de preservar y mejorar el entorno y territorio en el que se
              encuentran estas áreas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
