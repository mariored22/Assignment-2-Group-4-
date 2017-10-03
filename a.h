#pragma once

#include <vector>

namespace iProlog
{
	/// <summary>
	/// representation of a clause
	/// </summary>
	class Clause
	{
  public:
	  Clause(int const len, std::vector<int> &hgs, int const base, int const neck, std::vector<int> &xs);

	  const int len;
	  std::vector<int> const hgs;
	  const int base;
	  const int neck;
	  std::vector<int> const xs;
	};
}
