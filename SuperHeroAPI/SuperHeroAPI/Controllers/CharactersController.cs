using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHeroAPI.Data;
using SuperHeroAPI.Models;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharactersController : ControllerBase
    {
        private readonly superherodbContext _context;

        public CharactersController(superherodbContext context)
        {
            _context = context;
        }

        // GET: api/Characters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Character>>> GetCharacter()
        {
          if (_context.Character == null)
          {
              return NotFound();
          }
            return Ok(await _context.Character.ToListAsync());
        }

        // GET: api/Characters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Character>> GetCharacter(int id)
        {
          if (_context.Character == null)
          {
              return NotFound();
          }
            var character = await _context.Character.FindAsync(id);

            if (character == null)
            {
                return NotFound();
            }

            return character;
        }

        // PUT: api/Characters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<IEnumerable<Character>>> PutCharacter(int id, Character character)
        {
            if (id != character.Id)
            {
                return BadRequest();
            }

            _context.Entry(character).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CharacterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.Character.ToListAsync());
        }

        // POST: api/Characters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Character>>> PostCharacter(Character character)
        {
          if (_context.Character == null)
          {
              return Problem("Entity set 'superherodbContext.Character'  is null.");
          }
            _context.Character.Add(character);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CharacterExists(character.Id))
                {
                    Console.WriteLine("Added Character Id is " +character.Id);
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.Character.ToListAsync());                     //CreatedAtAction("GetCharacter", new { id = character.Id }, character);
        }

        // DELETE: api/Characters/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<Character>>> DeleteCharacter(int id)     //Task<ActionResult<IEnumerable<Character>>> GetCharacter()
        {
            if (_context.Character == null)
            {
                return NotFound();
            }
            var character = await _context.Character.FindAsync(id);
            if (character == null)
            {
                return NotFound();
            }

            _context.Character.Remove(character);
            await _context.SaveChangesAsync();

            return Ok(await _context.Character.ToListAsync());      //return NoContent();
        }

        private bool CharacterExists(int id)
        {
            return (_context.Character?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
