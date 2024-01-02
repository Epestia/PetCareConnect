﻿using PetCareConnectDAL.Entity;
using System.Collections.Generic;

namespace PetCareConnectDAL.Repository
{
    public interface IVeterinairesRepository
    {
        IEnumerable<VeterinairesEntity> GetAllVeterinaires();
        VeterinairesEntity GetVeterinaireById(int veterinaireId);
        void InsertVeterinaire(VeterinairesEntity veterinaire);
    }
}
