import React from 'react';
import { data } from "../data/data.js";
import Triangulation from '../assets/reports/5.Triangulation (Autosaved).pdf'
import Traversing from '../assets/reports/2.TRAVERSE.pdf'
import Levelling from '../assets/reports/1.Levelling Report.pdf'
import Tacheo from '../assets/reports/3.Tacheometric-Surveying.pdf'
import Photogrammetry from '../assets/reports/04_OBE_GEOM316_Nimesh.pdf'
import DBMS from '../assets/reports/5.Database.pdf'
import Landtenure from '../assets/reports/LandTenureThailandFinal.pdf'
import LULC from '../assets/reports/RS_LULCAssignment_Pokhara_Final.pdf'
import SAnalysis from '../assets/reports/SuitabilityAReport.pdf'
import RouteFinding from '../assets/reports/RouteFinding_GEOM405_MiniProject.pdf'











const Work = () => {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
          <table class="border-separate border-spacing-2 border border-green-900 ...">
            <thead>
              <tr>
                <th class="border border-blue-600 ...">Works</th>
                <th class="border border-blue-600 ...">Reports/Articles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 ...">Triangulation Survey</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={Triangulation} target="_blank">View Report</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Traversing</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={Traversing} target="_blank">View Report</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Levelling</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={Levelling} target="_blank">View Report</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Tacheometric Survey</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={Tacheo} target="_blank">View Report</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Photogrammetry</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={Photogrammetry} target="_blank">Review Article: UAV Surveying</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Suitability Analysis</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={SAnalysis} target="_blank">Article: Waste Disposal Site Selection Using GIS & MCDA</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Database Management System</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={DBMS} target="_blank">Article: Covid 19 Vaccine Distribution DBMS</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Land Tenure System</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={Landtenure} target="_blank">Article: Land Tenure System in Thailand</a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">Remote Sensing & Land Use Planning</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={LULC} target="_blank">Article: Monitoring LULC Change of Pokhara-Lekhnath </a></td>
              </tr>
              <tr>
                <td class="border border-slate-700 ...">WebGIS</td>
                <td class=" hover:bg-purple-600 ... border border-slate-700 ..."><a href={RouteFinding} target="_blank">Report: Route Finding Application</a></td>
              </tr>

            </tbody>
          </table>

          {/* Gird Item */}
          {/*      {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              
              {/* Hover effect for images 
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
            </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line 
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line 
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))} */}


        {/* </div> */}
      </div>
    </div>
  );
};

export default Work;
