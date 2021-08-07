
package web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

//Anotacion
@WebServlet("/HolaMundo")

public class HolaMundo extends HttpServlet{
    //llamada a servlet
    //glassfish se encarga de llamar a este metodo
    @Override
    protected void doGet(HttpServletRequest request , HttpServletResponse response) throws IOException{
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("Hola Mundo desde Servlets");
    }
}
